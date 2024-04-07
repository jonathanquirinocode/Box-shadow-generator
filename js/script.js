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
        
        this.applyRule();
        this.showRule();
    };

    applyRule(){
        this.previewBox.style.boxShadow = `${this.horizontalValue.value}px ${this.verticalValue.value}px ${this.blurValue.value}px ${this.spreadValue.value}px #000`;
        this.currentRule = this.previewBox.style.boxShadow;
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
        };

        this.applyRule();
        this.showRule();

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