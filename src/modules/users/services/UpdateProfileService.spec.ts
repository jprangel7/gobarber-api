import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();
        updateProfile = new UpdateProfileService(
            fakeUsersRepository,
            fakeHashProvider,
        );
    });

    it('should be able to update the profile', async () => {
        const user = await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'jhonDoe@email.com',
            password: '123456',
        });

        const updatedUser = await updateProfile.execute({
            user_id: user.id,
            name: 'John Tre',
            email: 'john@tre.com',
        });

        expect(updatedUser.name).toBe('John Tre');
        expect(updatedUser.email).toBe('john@tre.com');
    });

    it('should not be able to change to another user email', async () => {
        await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'jhonDoe@email.com',
            password: '123456',
        });

        const user = await fakeUsersRepository.create({
            name: 'Testson',
            email: 'testson@email.com',
            password: '123456',
        });

        await expect(
            updateProfile.execute({
                user_id: user.id,
                name: 'John Tre',
                email: 'jhonDoe@email.com',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to update the password', async () => {
        const user = await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'jhonDoe@email.com',
            password: '123456',
        });

        const updatedUser = await updateProfile.execute({
            user_id: user.id,
            name: 'John Tre',
            email: 'john@tre.com',
            password: '654321',
            old_password: '123456',
        });

        expect(updatedUser.password).toBe('654321');
    });

    it('should not be able to update the password without the old password', async () => {
        const user = await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'jhonDoe@email.com',
            password: '123456',
        });

        await expect(
            updateProfile.execute({
                user_id: user.id,
                name: 'John Tre',
                email: 'john@tre.com',
                password: '654321',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to update the password with wrong old password', async () => {
        const user = await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'jhonDoe@email.com',
            password: '123456',
        });

        await expect(
            updateProfile.execute({
                user_id: user.id,
                name: 'John Tre',
                email: 'john@tre.com',
                password: '654321',
                old_password: 'wrong old password',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
