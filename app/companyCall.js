if (!process.env.API_TOKEN) {
    throw Error('No api token configered in .env')
}
// TODO: some perf optimizations with data fetching, doesnt need to be sequential 
export const API_Token = process.env.API_TOKEN;
export const Base_URL = "https://systemvetardagencms.up.railway.app/";

const headers = { 
    'Authorization': `Bearer ${API_Token}`
};

export const API_Call_Team_Members = async () => {

    const response = await fetch(`${Base_URL}items/team_members`, {headers});
    const json = await response.json();
    const data = json.data;
    data.forEach(p => {if(p.portrait) 
    { p.portrait = image_url(p.portrait)}}
    )
    return data;
}

export const API_Call_Company = async (name) => {
    const response = await fetch(`${Base_URL}items/companies?filter[company_name][_in]=${name}`, {headers});
    const json = await response.json();
    const data = json.data[0];

    return data;
}

export const API_Call_Companies = async () => {
    const response = await fetch(`${Base_URL}items/companies`, {headers});
    const json = await response.json();
    const data = json.data;

    const positionIds = data.flatMap(item => item.positions);
    const programIds = data.flatMap(item => item.programs);
    const masterProgramIds = data.flatMap(item => item.master_programs);


    const response2 = await fetch(`${Base_URL}items/companies_positions/?filter[id][_in]=${positionIds.join(',')}`, {headers});
    const positions = (await response2.json()).data;


    const response3 = await fetch(`${Base_URL}items/companies_programs/?filter[id][_in]=${programIds.join(',')}`, {headers});
    const programs = (await response3.json()).data;

    const response4 = await fetch(`${Base_URL}items/companies_programs_1/?filter[id][_in]=${masterProgramIds.join(',')}`, {headers});
    const masterPrograms = (await response4.json()).data;

    data.forEach(company => {
        const related_positions = positions.filter(position => {return position.companies_id === company.id});
        const related_programs = programs.filter(program => company.id === program.companies_id);
        const related_masterPrograms = masterPrograms.filter(program => company.id === program.companies_id);

        const tempProgramIds = related_programs.flatMap(item => item.programs_id);
        const tempMasterProgramIds = related_masterPrograms.flatMap(item => item.programs_id);

        company.positionsIds = related_positions.flatMap(item => item.positions_id);
        company.programsIds = tempProgramIds.concat(tempMasterProgramIds)
        company.logo = company.logo ? image_url(company.logo) : null;
        company.sponsor = company.sponsor
    });

    return data;
}

export const API_Call_Programs = async () => {
    const response1 = await fetch(`${Base_URL}items/programs`, {headers});
    const data = (await response1.json()).data;
    const translationsIds = data.flatMap(item => item.translations);
    const response2 = await fetch(`${Base_URL}items/programs_translations/?filter[id][_in]=${translationsIds.join(',')}`, {headers});
    const programs = (await response2.json()).data;

    // Add the "master" property from data to programs
    const programsWithMaster = programs.map(program => {
        const correspondingDataItem = data.find(item => item.translations.includes(program.id));
        return {
            ...program,
            master: correspondingDataItem ? correspondingDataItem.master : null
        };
    });


    return programsWithMaster;
}

export const API_Call_Positions = async () => {
    const response1 = await fetch(`${Base_URL}items/positions`, {headers});
    const data = (await response1.json()).data;
    const translationsIds = data.flatMap(item => item.translations);
    const response2 = await fetch(`${Base_URL}items/positions_translations/?filter[id][_in]=${translationsIds.join(',')}`, {headers});
    const positions = (await response2.json()).data;


    return positions;
}

export const API_Call_Company_Details = async(ids) => {
    const data_detail = {}

    if (ids.programs){
        const response1 = await fetch(`${Base_URL}items/companies_programs/?filter[id][_in]=${ids.programs.join(',')}`, {headers});
        const programs1 = (await response1.json()).data;
        const programs1Ids = programs1.map(item => item.programs_id)
        const response1p1 = await fetch(`${Base_URL}items/companies_programs_1/?filter[id][_in]=${ids.programsMaster.join(',')}`, {headers});
        const programs1p1 = (await response1p1.json()).data;
        const programs1p1Ids = programs1p1.map(item => item.programs_id)

        //thiss combines bachelor and master programs for now
        const programIds = programs1Ids.concat(programs1p1Ids)


        const response2 = await fetch(`${Base_URL}items/programs/?filter[id][_in]=${programIds.join(',')}`, {headers});
        const programs2 = (await response2.json()).data;
        const translationsIds = programs2.flatMap(item => item.translations)
        const response3 = await fetch(`${Base_URL}items/programs_translations/?filter[id][_in]=${translationsIds.join(',')}`, {headers});
        const programs3 = (await response3.json()).data;
        programs3.forEach(program => {
            if(programs1p1Ids.includes(program.programs_id)){
                program.is_master = true;
            }
        })
        data_detail.programs = programs3;
       
    }

    if (ids.positions){
        const response1 = await fetch(`${Base_URL}items/companies_positions/?filter[id][_in]=${ids.positions.join(',')}`, {headers});
        const positions1 = (await response1.json()).data;
        const positionIds = positions1.map(item => item.positions_id);
        const response2 = await fetch(`${Base_URL}items/positions/?filter[id][_in]=${positionIds.join(',')}`, {headers});
        const positions2 = (await response2.json()).data;
        const translationsIds = positions2.flatMap(item => item.translations)
        const response3 = await fetch(`${Base_URL}items/positions_translations/?filter[id][_in]=${translationsIds.join(',')}`, {headers});
        const positions3 = (await response3.json()).data;
        data_detail.positions = positions3;
    }

    if (ids.contacts){
        const response = await fetch(`${Base_URL}items/contact_person/?filter[id][_in]=${ids.contacts.join(",")}`, {headers});
        const persons = (await response.json()).data;
        data_detail.contact_persons = persons;
    }

    if (ids.translations){
        const response = await fetch(`${Base_URL}items/companies_translations/?filter[id][_in]=${ids.translations.join(",")}`, {headers});
        const translations = (await response.json()).data;
        data_detail.translations = translations;
    }

    return data_detail;
}

export const image_url = (value) => {
    return `${Base_URL}assets/${value}`
}