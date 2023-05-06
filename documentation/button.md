# Button  *Component*

This is a custom button component for the SvD website. It already includes the desired styling. 

### Implementation
```HTML
<Button
    :link=      STRING
    width=      STRING (optional)
    bColor=     STRING (optional)
    tColor=     STRING (optional)
    borderCol=  STRING (optional)
    > <SLOT>
</Button>
```

## Attributes
**:link** \
Specify the link where the button should link to. Keep in mind that this is a vue binding.

**width** (optional)\
Specify the width for the button. Add values as CSS values, so for instance "14rem".

**bColor** (optional)\
Specify the background color of the button. Only use pre-configured CSS variables; for instance, "--clr-blue-700".

If no bColor is specified or the bColor is set to "gradient", the button background will default to the gradient color scheme (hard-coded) with white font color, as seen below:

![button_default_gradient](/documentation/img/button_default_gradient.png)


**tColor** (optional) \
Specify the text color of the button. Only use pre-configured CSS variables; for instance, "--clr-blue-700". 

**borderCol** (optional) \
Specify the border color of the button by also setting the bColor to "transparent". See an example below:

![button_border](/documentation/img/button_border.png)



## Example
```HTML
    <Button
        link="#contact"
        bColor="--clr-blue-100"
        tColor="--clr-blue-900"
        >{{ $t("contact_us_btn") }}
    </Button>
```

![button_example](/documentation/img/button_example.png)

This is a custom button component for the SvD website. 

    <Button
        :link=      <STRING>
        width=      <STRING> (optional)
        bColor=     <STRING> (optional)
        tColor=     <STRING> (optional)
        borderCol=  <STRING> (optional)
        > <SLOT>
    </Button>
