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
                <div class="columns has-text-left px-5">
                    <div class="column">
                        <div class="field">
                            <label class="label has-text-white">Name</label>
                            <div class="control">
                                <input class="input is-primary is-rounded" type="text" placeholder="Enter your name">
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="field">
                            <label class="label has-text-white">Email</label>
                            <div class="control">
                                <input class="input is-primary is-rounded" type="email" placeholder="Enter your email">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns has-text-left px-5">
                    <div class="column">
                        <div class="field">
                            <label class="label has-text-white">Subject</label>
                            <div class="control">
                                <input class="input is-primary is-rounded" type="text" placeholder="Enter the subject of the message">
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="field">
                            <label class="label has-text-white">Message</label>
                            <div class="control">
                                <textarea class="textarea is-primary is-rounded" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="button is-primary is-rounded is-fullwidth">Send Message</button>
            </div>
        </div>
    </div>
</template>