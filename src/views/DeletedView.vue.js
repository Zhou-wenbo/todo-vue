/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { useTodoStore } from '../stores/todo';
import { storeToRefs } from 'pinia';
const todoStore = useTodoStore();
const { deletedTasks } = storeToRefs(todoStore);
const restoreTask = (id) => todoStore.restoreTask(id);
const permanentDeleteTask = (id) => todoStore.permanentDeleteTask(id);
const clearAll = () => {
    if (confirm('确定要清空回收站吗？此操作不可恢复。')) {
        todoStore.clearDeletedTasks();
    }
};
const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['trash-header']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-header']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-list']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-list']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-list']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-restore']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-restore']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-permanent']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-permanent']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-clear-all']} */ ;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-card']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-item']} */ ;
/** @type {__VLS_StyleScopedClasses['task-actions']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "trash-view" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "trash-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "trash-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
if (!__VLS_ctx.deletedTasks.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "empty-state" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "trash-list" },
    });
    for (const [task] of __VLS_getVForSourceType((__VLS_ctx.deletedTasks))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: (task._id),
            ...{ class: "trash-item" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "task-info" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "task-text" },
        });
        (task.text);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "delete-time" },
        });
        (__VLS_ctx.formatDate(task.deletedAt));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "task-actions" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(!__VLS_ctx.deletedTasks.length))
                        return;
                    __VLS_ctx.restoreTask(task._id);
                } },
            ...{ class: "btn-restore" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(!__VLS_ctx.deletedTasks.length))
                        return;
                    __VLS_ctx.permanentDeleteTask(task._id);
                } },
            ...{ class: "btn-permanent" },
        });
    }
}
if (__VLS_ctx.deletedTasks.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "trash-footer" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.clearAll) },
        ...{ class: "btn-clear-all" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "back-home" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "back-link" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "back-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['trash-view']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-card']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-header']} */ ;
/** @type {__VLS_StyleScopedClasses['empty-state']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-list']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-item']} */ ;
/** @type {__VLS_StyleScopedClasses['task-info']} */ ;
/** @type {__VLS_StyleScopedClasses['task-text']} */ ;
/** @type {__VLS_StyleScopedClasses['delete-time']} */ ;
/** @type {__VLS_StyleScopedClasses['task-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-restore']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-permanent']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-clear-all']} */ ;
/** @type {__VLS_StyleScopedClasses['back-home']} */ ;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            deletedTasks: deletedTasks,
            restoreTask: restoreTask,
            permanentDeleteTask: permanentDeleteTask,
            clearAll: clearAll,
            formatDate: formatDate,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
