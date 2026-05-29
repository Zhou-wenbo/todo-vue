import TodoItem from './TodoItem.vue';
const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "task-list" },
});
for (const [task, idx] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
    /** @type {[typeof TodoItem, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TodoItem, new TodoItem({
        ...{ 'onToggle': {} },
        ...{ 'onDelete': {} },
        ...{ 'onEdit': {} },
        ...{ 'onClickItem': {} },
        key: (task.id),
        task: (task),
        index: (idx + 1),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onToggle': {} },
        ...{ 'onDelete': {} },
        ...{ 'onEdit': {} },
        ...{ 'onClickItem': {} },
        key: (task.id),
        task: (task),
        index: (idx + 1),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = {
        onToggle: (...[$event]) => {
            __VLS_ctx.$emit('toggle', $event);
        }
    };
    const __VLS_7 = {
        onDelete: (...[$event]) => {
            __VLS_ctx.$emit('delete', $event);
        }
    };
    const __VLS_8 = {
        onEdit: (...[$event]) => {
            __VLS_ctx.$emit('edit', $event);
        }
    };
    const __VLS_9 = {
        onClickItem: (...[$event]) => {
            __VLS_ctx.$emit('click-item', $event);
        }
    };
    var __VLS_2;
}
/** @type {__VLS_StyleScopedClasses['task-list']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TodoItem: TodoItem,
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
