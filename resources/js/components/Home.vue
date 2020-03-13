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
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div id="tickets" class="container tab-pane active"><br>
                                <div class="row">
                                    <div class="col">
                                        <h3>Lista de sus Tickets</h3>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Ticket</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Usado</th>
                                                <th scope="col">Usar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(ticket, index) in info.tickets" :key="index">
                                                <td v-html="ticket.ticket"></td>
                                                <td>{{ ticket.created_at | moment }}</td>
                                                <td v-html="ticket.pedido ? 'Si' : 'No'"></td>
                                                <td>
                                                    <button type="buttom" :class="`btn ${ticket.pedido ? 'btn-success' : 'btn-primary'} btn-sm ${setTicketLoading ? 'disabled' : ''}`" :disabled="ticket.pedido ? true : false" @click="setTicket(ticket.id)">
                                                        {{ticket.pedido ? 'Ticket Usado' : 'Usar Ticket'}}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr v-if="info.tickets.length == 0">
                                                <td rowspan="4">No tienes tickets registrados</td>
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
                tickets:[]
            },
            setTicketLoading: false
        }
        
    },
    methods:{
        getData(){
            axios.post('home/data')
            .then((res) => {
                this.info = res.data;
            }).catch((error) => {
                this.makeToast('danger', 'Error', 'A ocurrido un error al solicitar la información');
            })
        },
        setTicket(id){
            this.setTicketLoading = true;
            axios.post('home/ticketset',{
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