import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointments';

// Declarando o repositório, passando como parâmetro o Model
@EntityRepository(Appointment)
// Extendendo as funções padrões de Repository do TypeORM, passando como parâmetro o Model
class AppointmentsRepository extends Repository<Appointment> {
    public async findByDate(date: Date): Promise<Appointment | null> {
        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }
}

export default AppointmentsRepository;
