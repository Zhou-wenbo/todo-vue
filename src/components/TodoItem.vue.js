/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { inject } from 'vue';
const props = defineProps();
const emit = defineEmits();
const themeColor = inject('themeColor', '#42b983');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('click-item', __VLS_ctx.task._id);
        } },
    ...{ class: "task-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.index);
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.emit('toggle', __VLS_ctx.task._id);
        } },
    type: "checkbox",
    checked: (__VLS_ctx.task.completed),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ({ completed: __VLS_ctx.task.completed }) },
});
(__VLS_ctx.task.text);
if (__VLS_ctx.task.dueDate) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "due-date" },
    });
    (__VLS_ctx.task.dueDate);
}
if (__VLS_ctx.task.priority) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "priority-badge" },
    });
    (__VLS_ctx.task.priority === 'high' ? '🔴' : __VLS_ctx.task.priority === 'medium' ? '🟡' : '🟢');
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('edit', __VLS_ctx.task._id);
        } },
    ...{ class: "task-edit" },
    ...{ style: ({ borderColor: __VLS_ctx.themeColor }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('delete', __VLS_ctx.task._id);
        } },
    ...{ class: "task-delete" },
    ...{ style: ({ borderColor: __VLS_ctx.themeColor }) },
});
/** @type {__VLS_StyleScopedClasses['task-item']} */ ;
/** @type {__VLS_StyleScopedClasses['due-date']} */ ;
/** @type {__VLS_StyleScopedClasses['priority-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['task-edit']} */ ;
/** @type {__VLS_StyleScopedClasses['task-delete']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            themeColor: themeColor,
        };
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
