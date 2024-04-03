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