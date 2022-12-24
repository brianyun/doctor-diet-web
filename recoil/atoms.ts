import { User } from 'common/models';
import { atom } from 'recoil';

export const userState = atom<User>({
	key: 'userState',
	// default: {} as User,
	default: {} as User,
});
