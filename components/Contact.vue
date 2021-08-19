<template>
    <div class="pt-6 px-5 has-text-centered">
        <h4 class="title is-4 mt-5 pt-2 has-text-primary">CONTACT</h4>
        <div class="columns my-4">
            <div class="column">
                <p class="subtitle has-text-white">
                    Getting in touch...<br />
                    <span class="is-size-6 has-text-grey-light">
                        Got something urgent to discuss? <br />Send me a message. <br />
                        My response may not be as fast as the speed of light but I will definitely respond as soon as possible.
                    </span>
                </p>
                <div class="columns has-text-left px-5" v-if="!messageSent">
                    <div class="column">
                        <div class="field">
                            <label class="label has-text-white">Name</label>
                            <div class="control">
                                <input class="input is-primary is-rounded" v-model="contact.name" type="text" placeholder="Enter your name">
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="field">
                            <label class="label has-text-white">Email</label>
                            <div class="control">
                                <input class="input is-primary is-rounded" v-model="contact.email" type="email" placeholder="Enter your email">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns has-text-left px-5" v-if="!messageSent">
                    <div class="column">
                        <div class="field">
                            <label class="label has-text-white">Subject</label>
                            <div class="control">
                                <input class="input is-primary is-rounded" v-model="contact.subject" type="text" placeholder="Enter the subject of the message">
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="field">
                            <label class="label has-text-white">Message</label>
                            <div class="control">
                                <textarea class="textarea is-primary is-rounded" v-model="contact.message" placeholder="Enter your message" style="border-radius: 20px;"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div :class="`notification ${theme} is-light`" v-if="notification">
                    <button class="delete" @click="notification = null"></button>
                    {{ notification }}
                </div>

                <button class="button is-primary is-rounded is-fullwidth" @click="contactMe" v-if="!messageSent">Send Message</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contact: {
                name: null,
                email: null,
                subject: null,
                message: null,
            },
            notification: null,
            messageSent: false,
            theme: "is-danger",
        }
    },
    methods: {
        isEmail () {
            const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(this.contact.email);
        }, //end of isEmail
        async contactMe () {
            const valArr = Object.values(this.contact);
            if (valArr.includes(null) || valArr.includes("")) {
                this.notification = "All fields are required!";
                this.theme = "is-danger";
                return false;
            }

            if (!this.isEmail()) {
                this.notification = "Invalid email address!";
                this.theme = "is-danger";
                return false;
            }
            const postContact = await axios.post("api/contact", this.contact);
            this.theme = "is-success";
            this.notification = postContact.data.status;
            this.messageSent = true;
        }, //end of contactMe
    },
}
</script>