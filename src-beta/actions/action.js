import { dataActions } from "../store/store";
import { fetchonedata, fetchalldata, searchItems } from "../api/api";
export const getPost = (id) => {
  return async (dispatch) => {
    try {
      const post = await fetchonedata(id);
      dispatch(dataActions.dataaccess(post));

      //console.log(post);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getallPost = () => {
  return async (dispatch) => {
    try {
      dispatch(dataActions.loading(true));
      const post = await fetchalldata();

      dispatch(dataActions.dataaccessall(post));
      dispatch(dataActions.loading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
export const updatePostasc = () => {
  return async (dispatch) => {
    try {
      const post = await fetchalldata();
      dispatch(dataActions.sortdatasc(post));
    } catch (error) {
      console.log(error);
    }
  };
};
export const updatePostdesc = () => {
  return async (dispatch) => {
    try {
      const post = await fetchalldata();
      dispatch(dataActions.sortdatdesc(post));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatesearch = (data) => {
  return async (dispatch) => {
    try {
      const post = await searchItems(data);
      dispatch(dataActions.searchdatasc(post));
    } catch (error) {
      console.log(error);
    }
  };
};
