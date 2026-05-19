/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed, onMounted, provide } from 'vue';
import { useTodoStore } from '../stores/todo';
import { storeToRefs } from 'pinia';
import TodoInput from '../components/TodoInput.vue';
import TodoFilter from '../components/TodoFilter.vue';
import TodoList from '../components/TodoList.vue';
import { useDebounce } from '../composables/useDebounce';
const dueDateFilter = ref('all');
const sortOrder = ref('asc');
const priorityOrder = ref('asc');
const todoStore = useTodoStore();
const { tasks, currentFilter, loading, themeColor } = storeToRefs(todoStore);
provide('themeColor', themeColor);
const rawKeyword = ref('');
const searchKeyword = useDebounce(rawKeyword, 300);
const addTask = (text, dueDate, priority) => todoStore.addTask(text, dueDate, priority);
const deleteTask = (id) => todoStore.deleteTask(id);
const toggleComplete = (id) => todoStore.toggleComplete(id);
const setFilter = (filter) => todoStore.setFilter(filter);
const handleItemClick = (id) => alert(`点击任务 ID: ${id}`);
const togglePriorityOrder = () => {
    priorityOrder.value = priorityOrder.value === 'asc' ? 'desc' : 'asc';
};
const filteredAndSortedTasks = computed(() => {
    let filtered = tasks.value;
    if (searchKeyword.value.trim()) {
        const keyword = searchKeyword.value.trim().toLowerCase();
        filtered = filtered.filter(t => t.text.toLowerCase().includes(keyword));
    }
    if (dueDateFilter.value === 'has') {
        filtered = filtered.filter(t => t.dueDate);
    }
    else if (dueDateFilter.value === 'none') {
        filtered = filtered.filter(t => !t.dueDate);
    }
    const priorityValue = (p) => {
        if (p === 'high')
            return 3;
        if (p === 'medium')
            return 2;
        if (p === 'low')
            return 1;
        return 0;
    };
    return [...filtered].sort((a, b) => {
        const pa = priorityValue(a.priority);
        const pb = priorityValue(b.priority);
        if (pa !== pb) {
            return priorityOrder.value === 'asc' ? pa - pb : pb - pa;
        }
        if (sortOrder.value === 'asc') {
            if (!a.dueDate && !b.dueDate)
                return 0;
            if (!a.dueDate)
                return 1;
            if (!b.dueDate)
                return -1;
            return a.dueDate.localeCompare(b.dueDate);
        }
        else {
            if (!a.dueDate && !b.dueDate)
                return 0;
            if (!a.dueDate)
                return 1;
            if (!b.dueDate)
                return -1;
            return b.dueDate.localeCompare(a.dueDate);
        }
    });
});
const toggleSortOrder = () => {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
};
const handleEditTask = (id) => {
    const task = tasks.value.find(t => t._id === id);
    if (task) {
        const newText = prompt('编辑任务', task.text);
        if (newText && newText.trim())
            todoStore.editTask(id, newText.trim());
    }
};
onMounted(() => {
    todoStore.fetchTasks();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['glass-select']} */ ;
/** @type {__VLS_StyleScopedClasses['glass-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['task-list-container']} */ ;
/** @type {__VLS_StyleScopedClasses['task-list-container']} */ ;
/** @type {__VLS_StyleScopedClasses['task-list-container']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-view']} */ ;
/** @type {__VLS_StyleScopedClasses['control-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['action-group']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "todo-view" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "view-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "view-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "add-task-card" },
});
/** @type {[typeof TodoInput, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TodoInput, new TodoInput({
    ...{ 'onAdd': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onAdd': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onAdd: (__VLS_ctx.addTask)
};
var __VLS_2;
if (__VLS_ctx.tasks.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stats-grid" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-card" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-icon" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-info" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "stat-label" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "stat-number" },
    });
    (__VLS_ctx.tasks.length);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-card" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-icon" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-info" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "stat-label" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "stat-number" },
    });
    (__VLS_ctx.tasks.filter(t => t.completed).length);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-card" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-icon" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-info" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "stat-label" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "stat-number" },
    });
    (__VLS_ctx.tasks.filter(t => !t.completed).length);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "control-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "filter-group" },
});
/** @type {[typeof TodoFilter, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(TodoFilter, new TodoFilter({
    ...{ 'onChange': {} },
    currentFilter: (__VLS_ctx.currentFilter),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onChange': {} },
    currentFilter: (__VLS_ctx.currentFilter),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
let __VLS_12;
const __VLS_13 = {
    onChange: (__VLS_ctx.setFilter)
};
var __VLS_9;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "action-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.dueDateFilter),
    ...{ class: "glass-select" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "all",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "has",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "none",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleSortOrder) },
    ...{ class: "glass-btn" },
});
(__VLS_ctx.sortOrder === 'asc' ? '📅 升序' : '📅 降序');
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.togglePriorityOrder) },
    ...{ class: "glass-btn" },
});
(__VLS_ctx.priorityOrder === 'asc' ? '⭐ 优先级升序' : '⭐ 优先级降序');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "search-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "search-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    value: (__VLS_ctx.rawKeyword),
    placeholder: "搜索任务...",
    ...{ class: "search-input" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "task-list-container" },
});
/** @type {[typeof TodoList, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(TodoList, new TodoList({
    ...{ 'onToggle': {} },
    ...{ 'onDelete': {} },
    ...{ 'onEdit': {} },
    ...{ 'onClickItem': {} },
    tasks: (__VLS_ctx.filteredAndSortedTasks),
    filter: (__VLS_ctx.currentFilter),
}));
const __VLS_15 = __VLS_14({
    ...{ 'onToggle': {} },
    ...{ 'onDelete': {} },
    ...{ 'onEdit': {} },
    ...{ 'onClickItem': {} },
    tasks: (__VLS_ctx.filteredAndSortedTasks),
    filter: (__VLS_ctx.currentFilter),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_17;
let __VLS_18;
let __VLS_19;
const __VLS_20 = {
    onToggle: (__VLS_ctx.toggleComplete)
};
const __VLS_21 = {
    onDelete: (__VLS_ctx.deleteTask)
};
const __VLS_22 = {
    onEdit: (__VLS_ctx.handleEditTask)
};
const __VLS_23 = {
    onClickItem: (__VLS_ctx.handleItemClick)
};
var __VLS_16;
if (!__VLS_ctx.filteredAndSortedTasks.length && !__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "empty-state" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "loading-overlay" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "spinner" },
    });
}
/** @type {__VLS_StyleScopedClasses['todo-view']} */ ;
/** @type {__VLS_StyleScopedClasses['view-header']} */ ;
/** @type {__VLS_StyleScopedClasses['view-title']} */ ;
/** @type {__VLS_StyleScopedClasses['add-task-card']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-info']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-label']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-number']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-info']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-label']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-number']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-info']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-label']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-number']} */ ;
/** @type {__VLS_StyleScopedClasses['control-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['filter-group']} */ ;
/** @type {__VLS_StyleScopedClasses['action-group']} */ ;
/** @type {__VLS_StyleScopedClasses['glass-select']} */ ;
/** @type {__VLS_StyleScopedClasses['glass-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['glass-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['search-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['search-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['task-list-container']} */ ;
/** @type {__VLS_StyleScopedClasses['empty-state']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['spinner']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TodoInput: TodoInput,
            TodoFilter: TodoFilter,
            TodoList: TodoList,
            dueDateFilter: dueDateFilter,
            sortOrder: sortOrder,
            priorityOrder: priorityOrder,
            tasks: tasks,
            currentFilter: currentFilter,
            loading: loading,
            rawKeyword: rawKeyword,
            addTask: addTask,
            deleteTask: deleteTask,
            toggleComplete: toggleComplete,
            setFilter: setFilter,
            handleItemClick: handleItemClick,
            togglePriorityOrder: togglePriorityOrder,
            filteredAndSortedTasks: filteredAndSortedTasks,
            toggleSortOrder: toggleSortOrder,
            handleEditTask: handleEditTask,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
