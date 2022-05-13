import _ from 'lodash';
export const isArrayEqual = (x: any, y: any) => {
    return _.isEmpty(_.xorWith(x, y, _.isEqual));
};
