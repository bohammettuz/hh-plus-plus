class HHModule {
    constructor ({group, name, configSchema}) {
        this.group = group
        this.name = name
        this.configSchema = configSchema
        this.hasRun = false
    }
}

export default HHModule