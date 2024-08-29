"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../services/api"));
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    data() {
        return {
            offerings: []
        };
    },
    created() {
        api_1.default.get('/offerings/')
            .then(response => {
            this.offerings = response.data;
        })
            .catch(error => {
            console.log(error);
        });
    },
    methods: {
        tagClass(tag) {
            if (tag === 'Private Credit')
                return 'bg-gray-400'; // Tailwind's gray color
            if (tag === 'Current Income')
                return 'bg-yellow-500'; // Tailwind's yellow color
            return 'bg-gray-300'; // Default gray
        }
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-center text-2xl font-bold mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6") }, });
    for (const [offering] of __VLS_getVForSourceType((__VLS_ctx.offerings))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((offering.id)), ...{ class: ("bg-white rounded-lg p-4 shadow-lg") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-semibold") }, });
        (offering.title);
        // @ts-ignore
        [offerings,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2") }, });
        for (const [tag] of __VLS_getVForSourceType((offering.tags))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((tag)), ...{ class: ("px-3 py-1 text-xs font-bold rounded-full text-white") }, ...{ class: ((__VLS_ctx.tagClass(tag))) }, });
            __VLS_styleScopedClasses = (tagClass(tag));
            (tag);
            // @ts-ignore
            [tagClass,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-700") }, });
        (offering.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex justify-between px-2 text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (offering.estimated_term_years);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex justify-between px-2 text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (offering.target_net_irr);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex justify-between px-2 text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (offering.minimum_investment);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-end gap-2") }, });
        // @ts-ignore
        const __VLS_0 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ((`/offerings/${offering.id}`)), ...{ class: ("px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700") }, }));
        const __VLS_2 = __VLS_1({ to: ((`/offerings/${offering.id}`)), ...{ class: ("px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ to: ((`/offerings/${offering.id}`)), ...{ class: ("px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700") }, }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        __VLS_nonNullable(__VLS_5.slots).default;
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400") }, });
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['p-8'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['sm:grid-cols-2'];
        __VLS_styleScopedClasses['md:grid-cols-3'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['shadow-lg'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-end'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['bg-gray-800'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['hover:bg-gray-700'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['bg-yellow-500'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['hover:bg-yellow-400'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
