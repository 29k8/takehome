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
            username: '',
            password: '',
            error: null
        };
    },
    methods: {
        login() {
            // Prepare login data
            const loginData = {
                username: this.username,
                password: this.password
            };
            // Send login request
            api_1.default.post('/login/', loginData)
                .then(response => {
                // Handle successful login
                console.log('Login successful:', response.data);
                this.$router.push('/offerings');
            })
                .catch(error => {
                // Handle login failure
                console.error('Login failed:', error);
                this.error = 'Invalid username or password. Please try again.';
            });
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-md mx-auto p-6 border border-gray-300 rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-6 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.login) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("username"), ...{ class: ("block mb-2 font-medium") }, });
    // @ts-ignore
    [login,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("username"), value: ((__VLS_ctx.username)), required: (true), ...{ class: ("w-full p-2 border border-gray-300 rounded") }, });
    // @ts-ignore
    [username,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), ...{ class: ("block mb-2 font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), id: ("password"), required: (true), ...{ class: ("w-full p-2 border border-gray-300 rounded") }, });
    (__VLS_ctx.password);
    // @ts-ignore
    [password,];
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-red-500 mb-4") }, });
        (__VLS_ctx.error);
        // @ts-ignore
        [error, error,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['max-w-md'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['text-red-500'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['bg-blue-600'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['hover:bg-blue-700'];
        __VLS_styleScopedClasses['transition-colors'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
