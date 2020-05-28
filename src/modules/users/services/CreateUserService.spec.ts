import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('CreateUser', () => {
    it('should be able to create a new user', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const hashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(
            fakeUsersRepository,
            hashProvider,
        );

        const user = await createUser.execute({
            name: 'John Doe',
            email: 'jhonDoe@email.com',
            password: '123456',
        });

        expect(user).toHaveProperty('id');
    });

    it('should not be able to create a new user with same email from another', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const hashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(
            fakeUsersRepository,
            hashProvider,
        );

        await createUser.execute({
            name: 'John Doe',
            email: 'jhonDoe@email.com',
            password: '123456',
        });

        expect(
            createUser.execute({
                name: 'John Doe',
                email: 'jhonDoe@email.com',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
