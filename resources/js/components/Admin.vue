<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-12 col-lg-10 col-xl-8">
                <div class="card">
                    <div class="card-header">
                    Dashboard
                    </div>
                    <div class="card-body">
                         <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tickets">Tickets</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#usuarios">Usuarios</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div id="tickets" class="container tab-pane active"><br>
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <h3>Lista de Tickets</h3>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <input type="text" class="form-control" v-model="filterTicket" @keyup="filteredTickets" placeholder="Buscar por Nombre" aria-describedby="button-addon2">
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Ticket</th>
                                                <th scope="col">Pertenece</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Usado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(ticket, index) in filteredTickets" :key="index">
                                                <td v-html="ticket.ticket"></td>
                                                <td v-html="ticket.user.name"></td>
                                                <td>{{ ticket.created_at | moment }}</td>
                                                <td>
                                                    <button type="buttom" :class="`btn ${ticket.pedido ? 'btn-success' : 'btn-danger'} btn-sm`" :disabled="true">
                                                        {{ticket.pedido ? 'Ticket Usado' : 'Pendiente'}}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr v-if="filteredTickets.length == 0">
                                                <td rowspan="4">No hay tickets registrados</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="usuarios" class="container tab-pane fade"><br>
                                <div class="row d-flex">
                                    <div class="col-md-6 col-sm-12">
                                        <h3>Lista de Usuarios</h3>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <input type="text" class="form-control" v-model="filterUser" @keyup="filteredUsers" placeholder="Buscar por Nombre" aria-describedby="button-addon2">
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Rol</th>
                                                <th scope="col">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(user, index) in filteredUsers" :key="index">
                                                <td v-html="user.name"></td>
                                                <td v-html="user.email"></td>
                                                <td v-html="user.role.name"></td>
                                                <td>
                                                    <button type="buttom" :class="`btn btn-primary btn-sm ${setTicketLoading ? 'disabled' : ''}`" @click="setTicket(user.id)">
                                                        {{setTicketLoading ? 'Cargando Ticket' : 'Nuevo Ticket'}}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr v-if="filteredUsers.length == 0">
                                                <td rowspan="4">No hay usuarios registrados</td>
                                            </tr> 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name:"Admin",
    data() {
        return {
            info:{
                users:[],
                tickets:[]
            },
            filterUser:'',
            filterTicket:'',
            setTicketLoading: false
        }
        
    },
    methods:{
        getData(){
            axios.post('admin/data')
            .then((res) => {
                this.info = res.data;
            }).catch((error) => {
                this.makeToast('danger', 'Error', 'A ocurrido un error al solicitar la informacion');
            })
        },
        setTicket(id){
            this.setTicketLoading = true;
            axios.post('admin/ticketset',{
                id:id
            })
            .then((res) => {
                this.setTicketLoading = false;
                this.getData();
                this.makeToast('success', res.data.status, res.data.message);
            }).catch((error) => {
                this.setTicketLoading = false;
                this.makeToast('danger', error.data.status, error.data.message);
            })
        },
        makeToast(variant = null, title, message) {
            this.$bvToast.toast(message, {
                title: title,
                variant: variant,
                solid: true
            })
        },
        
        
    },
    computed:{
        filteredUsers(){
            var users = this.info.users;
            if(this.filterUser){
                users = users.filter((p) => {
                    return p.name.indexOf(this.filterUser) !== -1
                })
            }
            //self.users = users.filter(user => user.name == self.filterUser);
            return users;
        },
        filteredTickets(){
            var tickets = this.info.tickets;
            if(this.filterTicket){
                tickets = tickets.filter((p) => {
                    return p.user.name.indexOf(this.filterTicket) !== -1
                })
            }
            //self.users = users.filter(user => user.name == self.filterUser);
            return tickets;
        }
        
    },
    mounted(){
        this.getData();
    },
    filters: {
        moment: function (date) {
            return moment(date).locale('es').format('LLL');
        }
    }

}
</script>