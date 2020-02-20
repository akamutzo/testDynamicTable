export const tableReducer = (
  state = {
    tableData: [],
    sortKey: null,
    sortOrder: "up"
  },
  action
) => { 
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        tableData: action.payload,
        isLoaded: true
      };
    case "SORT_TABLE_BY_KEY":
      return {
        ...state,
        sortOrder: action.payload.sortOrder,
        sortKey: action.payload.sortKey,
        tableData: action.payload.tableData
      };
    default:
      return state;
  }
};
