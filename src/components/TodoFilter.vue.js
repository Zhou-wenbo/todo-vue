const __VLS_props = defineProps();
const emit = defineEmits();
const filters = [
    { label: '全部', value: 'all' },
    { label: '未完成', value: 'pending' },
    { label: '已完成', value: 'completed' }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['filter-area']} */ ;
/** @type {__VLS_StyleScopedClasses['filter-area']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "filter-area" },
});
for (const [filter] of __VLS_getVForSourceType((__VLS_ctx.filters))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.emit('change', filter.value);
            } },
        key: (filter.value),
        ...{ class: ({ active: __VLS_ctx.currentFilter === filter.value }) },
    });
    (filter.label);
}
/** @type {__VLS_StyleScopedClasses['filter-area']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            filters: filters,
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
