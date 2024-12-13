"use strict";
//ref section//
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//exp section//
let exp_section = document.getElementById('exp');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
//lang section//
let lang_section = document.getElementById('lang');
let lang_btn = document.getElementById('lang_btn');
lang_btn?.addEventListener('click', () => {
    lang_section.classList.toggle('hide');
});
//exper section//
let exper_section = document.getElementById('exper');
let exper_btn = document.getElementById('exper_btn');
exper_btn?.addEventListener('click', () => {
    exper_section.classList.toggle('hide');
});
//edu section//
let edu_section = document.getElementById('edu');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    edu_section.classList.toggle('hide');
});
//cont section//
let cont_section = document.getElementById('cont');
let cont_btn = document.getElementById('cont_btn');
cont_btn?.addEventListener('click', () => {
    cont_section.classList.toggle('hide');
});
//print buton
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
