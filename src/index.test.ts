import { expect } from 'chai';
import {
  parseUuidProperties, stringifyUuidProperties, uuid, uuidStringify,
} from './index';

describe('Uuid Library Unit Testing', () => {
  const makeFakeNotification = () => ({
    id: uuid(),
    application_id: uuid(),
    object_id: uuid(),
    object_type: 'transfer-created',
    retry_count: 0,
    retry_max: 10,
    account_id: uuid(),
  });

  it('Should parse and stringify an object correctly', () => {
    const fakeNotification = makeFakeNotification();

    const parsedNotification = parseUuidProperties(fakeNotification);

    const stringifiedNotification = stringifyUuidProperties(parsedNotification);

    expect(stringifiedNotification.id).to.equal(fakeNotification.id);
    expect(stringifiedNotification.application_id).to.equal(fakeNotification.application_id);
    expect(stringifiedNotification.object_type).to.equal(fakeNotification.object_type);
    expect(stringifiedNotification.account_id).to.equal(fakeNotification.account_id);

    expect(uuidStringify(parsedNotification.id)).to.equal(fakeNotification.id);
  });
});
