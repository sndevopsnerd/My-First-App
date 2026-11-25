import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c366cf6729cc4faeab4e4741d2738ac0'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '333230365dfa4d76aad5a2dbc0a20b55'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '18f19bde3ae242edb9328d9bc4aa979e'
                        key: {
                            name: 'x_803913_my_first_task_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2843c682c28041518d77abbc580f6e87'
                        key: {
                            name: 'x_803913_my_first_task_item'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29bcccc6223643feba048b379dc1a96a'
                        key: {
                            name: 'x_803913_my_first_task_item'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '435481710b904173b640e5ac45e15f7b'
                        key: {
                            name: 'x_803913_my_first_task_item'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '66c70e3e7883483584e8c676b7146756'
                        key: {
                            name: 'x_803913_my_first_task_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6bc94473db20454290b92f1d3e23de5d'
                        key: {
                            name: 'x_803913_my_first_task_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca45923d29f044d7877861b4c5ec8db2'
                        key: {
                            name: 'x_803913_my_first_task_item'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd0c38dae807f447884a49b8d19825a45'
                        key: {
                            name: 'x_803913_my_first_task_item'
                        }
                    },
                ]
            }
        }
    }
}
