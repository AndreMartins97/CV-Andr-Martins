const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = { 
  
    bg: getStyle(html, "--bg"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorGrey: getStyle(html, "--color-grey"),
    colorButtom: getStyle(html, "--color-buttom")

}

const darkMode = {
    
    bg: "#393939",
    colorHeadings: "#858585",
    colorText: "#cccccc",
    colorGrey: "#939393",
    colorButtom: "#339fff"

}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})