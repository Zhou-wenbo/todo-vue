/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { onMounted } from 'vue';
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
// 修复类型：参数可能为 null 或 undefined
const formatDate = (timestamp) => {
    if (!timestamp)
        return '';
    return new Date(timestamp).toLocaleString();
};
onMounted(() => {
    todoStore.fetchDeletedTasks();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "deleted-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
if (!__VLS_ctx.deletedTasks || !__VLS_ctx.deletedTasks.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "empty" },
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "deleted-list" },
    });
    for (const [task] of __VLS_getVForSourceType((__VLS_ctx.deletedTasks))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: (task.id),
            ...{ class: "deleted-item" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (task.text);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "date" },
        });
        (__VLS_ctx.formatDate(task.deleted_at));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "actions" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(!__VLS_ctx.deletedTasks || !__VLS_ctx.deletedTasks.length))
                        return;
                    __VLS_ctx.restoreTask(task.id);
                } },
            ...{ class: "restore" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(!__VLS_ctx.deletedTasks || !__VLS_ctx.deletedTasks.length))
                        return;
                    __VLS_ctx.permanentDeleteTask(task.id);
                } },
            ...{ class: "permanent" },
        });
    }
}
if (__VLS_ctx.deletedTasks && __VLS_ctx.deletedTasks.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.clearAll) },
        ...{ class: "clear-all" },
    });
}
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
/** @type {__VLS_StyleScopedClasses['deleted-container']} */ ;
/** @type {__VLS_StyleScopedClasses['empty']} */ ;
/** @type {__VLS_StyleScopedClasses['deleted-list']} */ ;
/** @type {__VLS_StyleScopedClasses['deleted-item']} */ ;
/** @type {__VLS_StyleScopedClasses['date']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
/** @type {__VLS_StyleScopedClasses['restore']} */ ;
/** @type {__VLS_StyleScopedClasses['permanent']} */ ;
/** @type {__VLS_StyleScopedClasses['clear-all']} */ ;
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
