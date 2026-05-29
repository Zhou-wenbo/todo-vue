/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['task-item']} */ ;
/** @type {__VLS_StyleScopedClasses['task-text']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('click-item', __VLS_ctx.task.id);
        } },
    ...{ class: "task-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.index);
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.$emit('toggle', __VLS_ctx.task.id);
        } },
    type: "checkbox",
    checked: (__VLS_ctx.task.completed),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ({ completed: __VLS_ctx.task.completed }) },
});
(__VLS_ctx.task.text);
if (__VLS_ctx.task.due_date) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "due-date" },
    });
    (__VLS_ctx.task.due_date);
}
if (__VLS_ctx.task.priority) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "priority-badge" },
        ...{ class: (__VLS_ctx.task.priority) },
    });
    (__VLS_ctx.task.priority === 'high' ? '🔴' : __VLS_ctx.task.priority === 'medium' ? '🟡' : '🟢');
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('edit', __VLS_ctx.task.id);
        } },
    ...{ class: "task-edit" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('delete', __VLS_ctx.task.id);
        } },
    ...{ class: "task-delete" },
});
/** @type {__VLS_StyleScopedClasses['task-item']} */ ;
/** @type {__VLS_StyleScopedClasses['due-date']} */ ;
/** @type {__VLS_StyleScopedClasses['priority-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['task-edit']} */ ;
/** @type {__VLS_StyleScopedClasses['task-delete']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
