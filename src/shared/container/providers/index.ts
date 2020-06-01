import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
// import IMailProvider from './MailProvider/models/IMailProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
    'StorageProvider',
    DiskStorageProvider,
);
