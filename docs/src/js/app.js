const { required, numeric, minLength, helpers } = VuelidateValidators;
const { useVuelidate } = Vuelidate;
const between0And31 = (value) => value >= 0 && value <= 31;  
const between0and12  = (value) => value >= 0 && value <= 12;
const dateNotInFuture = (value) => (new Date()).getFullYear
const datePastValid = (value) => moment().year() >= value;


Vue.createApp({
    setup () {
        return {
          v$: useVuelidate()
        }
      },
    data() {
        return {
            month: '',
            day: '',
            year: '',
            diffYears: '--',
            diffMonths: '--',
            diffDays: '--',
        }
    },
    methods: {
       async calculateBirthDate() {
        const isFormCorrect = await this.v$.$validate();
        if (!isFormCorrect) return;

        let date = moment(`${this.year}-${this.month}-${this.day}`);
        console.log(date);
        let now  = moment();
        if (!date.isValid()) {
            this.diffYears = 'invalid';
            this.diffMonths = 'invalid';
            this.diffDays = 'invalid';
            return;
        }

        
        this.diffYears = now.diff(date, 'years');
        this.diffDays = now.diff(date, 'days');
        this.diffMonths = now.diff(date, 'months');
       }
    },
    validations() {
        return {
            month: { required, between0And31: helpers.withMessage('Must be between 0 and 12', between0and12) },
            year: { required, datePastValid: helpers.withMessage('Year must be in the past', datePastValid) },
            day: { required, between0And31: helpers.withMessage('Must be between 0 and 31', between0And31) }
        }
    }
}).mount('#app');

