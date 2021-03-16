import _ from 'lodash';
import {
  v4 as uuid, parse, stringify, validate as uuidValidate,
} from 'uuid';

const uuidParse = (data: string | null | undefined): Buffer | any => {
  return data ? Buffer.from(parse(data) as Uint8Array) : data;
};

const uuidStringify = (data: any): string => {
  return data instanceof Buffer ? stringify(data) : data;
};

const parseUuidProperties = <T>(object: T): T => {
  return _.cloneDeepWith(object, (value) => {
    if (typeof value === 'string' && uuidValidate(value)) {
      return uuidParse(value);
    }

    return undefined;
  });
};

const stringifyUuidProperties = <T>(object: T): T => {
  return _.cloneDeepWith(object, (value) => {
    if (Buffer.isBuffer(value)) {
      return uuidStringify(value);
    }

    return undefined;
  });
};

export {
  uuid, uuidParse, uuidStringify, uuidValidate, parseUuidProperties, stringifyUuidProperties,
};
