/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
const newTaskText = ref('');
const dueDate = ref('');
const priority = ref('medium');
const emit = defineEmits(['add']);
const submit = () => {
    if (newTaskText.value.trim()) {
        emit('add', newTaskText.value.trim(), dueDate.value || undefined, priority.value);
        newTaskText.value = '';
        dueDate.value = '';
        priority.value = 'medium';
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['task-input']} */ ;
/** @type {__VLS_StyleScopedClasses['date-input']} */ ;
/** @type {__VLS_StyleScopedClasses['add-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-input-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['task-input']} */ ;
/** @type {__VLS_StyleScopedClasses['date-input']} */ ;
/** @type {__VLS_StyleScopedClasses['priority-select']} */ ;
/** @type {__VLS_StyleScopedClasses['add-btn']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "todo-input-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onKeyup: (__VLS_ctx.submit) },
    type: "text",
    value: (__VLS_ctx.newTaskText),
    placeholder: "✍️ 写一个任务...",
    ...{ class: "task-input" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "date",
    ...{ class: "date-input" },
});
(__VLS_ctx.dueDate);
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.priority),
    ...{ class: "priority-select" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "high",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "medium",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "low",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.submit) },
    ...{ class: "add-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
/** @type {__VLS_StyleScopedClasses['todo-input-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['task-input']} */ ;
/** @type {__VLS_StyleScopedClasses['date-input']} */ ;
/** @type {__VLS_StyleScopedClasses['priority-select']} */ ;
/** @type {__VLS_StyleScopedClasses['add-btn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
            newTaskText: newTaskText,
            dueDate: dueDate,
            priority: priority,
            submit: submit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
