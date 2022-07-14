# phone-cave-app

Model:

Phone
- name: string
- manufacturer: string
- description: string
- color: string
- price: number
- image: string
- screen: string
- processor: string
- ram: number

server-side routes:
GET /phones - get all the phones from the list
get /phones/:id - get a single phone

client-side pages:

PhonesListPage - display all the phones from the list
SinglePhonePage - show single phone details

services:

loadPhones() - get request to /phones to load a list of phones
loadSinglePhone() - get request to `/phones/${id}` to load a single phone`s details
