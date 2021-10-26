import axios from "axios";
import { _apiBase } from "./_base";

export const _getAssignees = () => {
  return axios.get(_apiBase + "assignees").then((res) => {
    return res.data.assignees;
  });
};
