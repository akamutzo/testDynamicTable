export const actions = {
  setUsers: tableData => ({ type: "SET_USERS", payload: tableData }),
  sortTableByKey: (sortKey, sortOrder, tableData) => ({
    type: "SORT_TABLE_BY_KEY",
    payload: {
      sortKey: sortKey,
      sortOrder: sortOrder,
      tableData: tableData
    }
  })
};
