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
const WelcomeItem_vue_1 = __importDefault(require("./WelcomeItem.vue"));
const IconDocumentation_vue_1 = __importDefault(require("./icons/IconDocumentation.vue"));
const IconTooling_vue_1 = __importDefault(require("./icons/IconTooling.vue"));
const IconEcosystem_vue_1 = __importDefault(require("./icons/IconEcosystem.vue"));
const IconCommunity_vue_1 = __importDefault(require("./icons/IconCommunity.vue"));
const IconSupport_vue_1 = __importDefault(require("./icons/IconSupport.vue"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [WelcomeItem_vue_1.default, WelcomeItem_vue_1.default,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(WelcomeItem_vue_1.default, new WelcomeItem_vue_1.default({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(WelcomeItem_vue_1.default, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_4.slots);
        // @ts-ignore
        [IconDocumentation_vue_1.default,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(IconDocumentation_vue_1.default, new IconDocumentation_vue_1.default({}));
        const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
        ({}({}));
        const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(IconDocumentation_vue_1.default, __VLS_6));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { heading: __VLS_thisSlot } = __VLS_nonNullable(__VLS_4.slots);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vuejs.org/"), target: ("_blank"), rel: ("noopener"), });
    // @ts-ignore
    [WelcomeItem_vue_1.default, WelcomeItem_vue_1.default,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(WelcomeItem_vue_1.default, new WelcomeItem_vue_1.default({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(WelcomeItem_vue_1.default, __VLS_11));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_14.slots);
        // @ts-ignore
        [IconTooling_vue_1.default,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(IconTooling_vue_1.default, new IconTooling_vue_1.default({}));
        const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({}));
        const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(IconTooling_vue_1.default, __VLS_16));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { heading: __VLS_thisSlot } = __VLS_nonNullable(__VLS_14.slots);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vitejs.dev/guide/features.html"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://code.visualstudio.com/"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/johnsoncodehk/volar"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.cypress.io/"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://on.cypress.io/component"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({});
    // @ts-ignore
    [WelcomeItem_vue_1.default, WelcomeItem_vue_1.default,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(WelcomeItem_vue_1.default, new WelcomeItem_vue_1.default({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    ({}({}));
    const __VLS_24 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(WelcomeItem_vue_1.default, __VLS_21));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_24.slots);
        // @ts-ignore
        [IconEcosystem_vue_1.default,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(IconEcosystem_vue_1.default, new IconEcosystem_vue_1.default({}));
        const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({}));
        const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(IconEcosystem_vue_1.default, __VLS_26));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { heading: __VLS_thisSlot } = __VLS_nonNullable(__VLS_24.slots);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://pinia.vuejs.org/"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://router.vuejs.org/"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://test-utils.vuejs.org/"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/vuejs/devtools"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/vuejs/awesome-vue"), target: ("_blank"), rel: ("noopener"), });
    // @ts-ignore
    [WelcomeItem_vue_1.default, WelcomeItem_vue_1.default,];
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(WelcomeItem_vue_1.default, new WelcomeItem_vue_1.default({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    ({}({}));
    const __VLS_34 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(WelcomeItem_vue_1.default, __VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_34.slots);
        // @ts-ignore
        [IconCommunity_vue_1.default,];
        // @ts-ignore
        const __VLS_35 = __VLS_asFunctionalComponent(IconCommunity_vue_1.default, new IconCommunity_vue_1.default({}));
        const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
        ({}({}));
        const __VLS_39 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(IconCommunity_vue_1.default, __VLS_36));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { heading: __VLS_thisSlot } = __VLS_nonNullable(__VLS_34.slots);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://chat.vuejs.org"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://stackoverflow.com/questions/tagged/vue.js"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://news.vuejs.org"), target: ("_blank"), rel: ("noopener"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://twitter.com/vuejs"), target: ("_blank"), rel: ("noopener"), });
    // @ts-ignore
    [WelcomeItem_vue_1.default, WelcomeItem_vue_1.default,];
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(WelcomeItem_vue_1.default, new WelcomeItem_vue_1.default({}));
    const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
    ({}({}));
    const __VLS_44 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(WelcomeItem_vue_1.default, __VLS_41));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_44.slots);
        // @ts-ignore
        [IconSupport_vue_1.default,];
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(IconSupport_vue_1.default, new IconSupport_vue_1.default({}));
        const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
        ({}({}));
        const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(IconSupport_vue_1.default, __VLS_46));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { heading: __VLS_thisSlot } = __VLS_nonNullable(__VLS_44.slots);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vuejs.org/sponsor/"), target: ("_blank"), rel: ("noopener"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                WelcomeItem: WelcomeItem_vue_1.default,
                DocumentationIcon: IconDocumentation_vue_1.default,
                ToolingIcon: IconTooling_vue_1.default,
                EcosystemIcon: IconEcosystem_vue_1.default,
                CommunityIcon: IconCommunity_vue_1.default,
                SupportIcon: IconSupport_vue_1.default,
            };
        },
    });
}
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
});
;
