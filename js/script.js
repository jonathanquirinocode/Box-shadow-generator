class BoxShadowGenerator {
    constructor(
        horizontal,
        horizontalValue,
        vertical,
        verticalValue,
        blur,
        blurValue,
        spread,
        spreadValue,
        color,
        colorValue,
        opacity,
        opacityValue,
        inset,
        previewBox,
        rule,
        webkitRule,
        mozRule
    ){
        this.horizontal = horizontal;
        this.horizontalValue = horizontalValue;
        this.vertical = vertical;
        this.verticalValue = verticalValue;
        this.blur = blur;
        this.blurValue = blurValue;
        this.spread = spread;
        this.spreadValue = spreadValue;
        this.color = color;
        this.colorValue = colorValue;
        this.opacity = opacity;
        this.opacityValue = opacityValue;
        this.inset = inset;
        this.insetValue = inset.checked;
        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRule = webkitRule;
        this.mozRule = mozRule;
    };

    initialize(){
        this.horizontalValue.value = this.horizontal.value;
        this.verticalValue.value = this.vertical.value;
        this.blurValue.value = this.blur.value;
        this.spreadValue.value = this.spread.value;
        this.colorValue.value = this.color.value;
        this.opacityValue.value = this.opacity.value;
        
        this.applyRule();
        this.showRule();
    };

    applyRule(){

        const rgbValue = this.hexToRgb(this.colorValue.value);
       
        const shadowRule = `${this.insetValue ? "inset" : ""} ${
            this.horizontalValue.value
        }px ${this.verticalValue.value}px ${this.blurValue.value}px ${
            this.spreadValue.value
        }px rgba(${rgbValue}, ${this.opacityValue.value})`;
        
        this.previewBox.style.boxShadow = shadowRule;
        this.currentRule = shadowRule;
    };

    showRule(){
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;
    };

    updatePreview(type, value){

        switch(type){

            case "horizontal":
                this.horizontalValue.value = value;
            break;

            case "vertical":
                this.verticalValue.value = value;
            break;

            case "blur":
                this.blurValue.value = value;
            break;

            case "spread":
                this.spreadValue.value = value;
            break;

            case "color":
                this.colorValue.value = value;
            break;

            case "opacity":
                this.opacityValue.value = value;
            break;

            case "inset":
                this.insetValue = value;
            break;
        };

        this.applyRule();
        this.showRule();

    };

    hexToRgb(hex){
        return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, 
        ${("0x" + hex[5] + hex[6]) | 0}`;
    };

};

const horizontal = document.querySelector("#horizontal");
const horizontalValue = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalValue = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurValue = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadValue = document.querySelector("#spread-value");

const color = document.querySelector("#color");
const colorValue = document.querySelector("#color-value");

const opacity = document.querySelector("#opacity");
const opacityValue = document.querySelector("#opacity-value");

const inset = document.querySelector("#inset");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule");
const webkitRule = document.querySelector("#webkit-rule");
const mozRule = document.querySelector("#moz-rule");

const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalValue,
    vertical,
    verticalValue,
    blur,
    blurValue,
    spread,
    spreadValue,
    color,
    colorValue,
    opacity,
    opacityValue,
    inset,
    previewBox,
    rule,
    webkitRule,
    mozRule
);

console.log(boxShadow);

boxShadow.initialize();

// EVENTS

horizontal.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updatePreview("horizontal", value)
});

vertical.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updatePreview("vertical", value)
});

blur.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updatePreview("blur", value)
});

spread.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updatePreview("spread", value)
});

color.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updatePreview("color", value)
});

opacity.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updatePreview("opacity", value)
});

inset.addEventListener("input", (e) => {
    const value = e.target.checked;

    boxShadow.updatePreview("inset", value)
});