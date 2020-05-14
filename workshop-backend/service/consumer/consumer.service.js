const Consumer = require("./consumer.model");

this.getConsumer = async () => {
    const consumer = await Consumer.find();
    return consumer;
}

this.createConsumer = async () => {
    let consumer = new Consumer({ name: `consumer ${Math.random()}`, credit: Math.random() });
    await consumer.save().then(() => console.log('consumer created'));
    return consumer;
}

module.exports = this;