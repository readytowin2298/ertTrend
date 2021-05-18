const readCSV = require('./fileFuncs')

class Ticket {
    constructor(ticket){
        this.number = ticket.Number;
        this.subject = ticket.Subject;
        this.status = ticket.Status;
        this.assignedTo = ticket['Assigned To'];
        this.account = ticket.Account;
        this.type = ticket['Ticket Problem'];
        this.towerName = ticket['Access Point'];
    }


    static async genTickets(filePath='./file.csv') {
        let tickets = [];
        const ticketData = await readCSV(filePath);
        for(let ticket of ticketData){
            tickets.push(new Ticket(ticket))
        }
        return tickets;
    }
}

module.exports = Ticket