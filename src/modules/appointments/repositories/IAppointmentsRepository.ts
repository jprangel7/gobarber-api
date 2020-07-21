import Appointment from '../infra/typeorm/entities/Appointments';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentsDTO';
import IFindAllInDayFromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';

export default interface IAppointmentsRepository {
    create(data: ICreateAppointmentDTO): Promise<Appointment>;
    findByDate(date: Date): Promise<Appointment | undefined>;
    findAllInDayFromProvider(
        data: IFindAllInDayFromProviderDTO
    ): Promise<Appointment[]>;
    findAllInMonthFromProvider(
        data: IFindAllInMonthFromProviderDTO
    ): Promise<Appointment[]>;
}
