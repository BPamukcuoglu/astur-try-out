

export const getAllMockProducts = () => {

    return [
        {
            "id": 1,
            "created_at": "2022-06-28T21:45:57.227-04:00",
            "created_by": "service-account-astur_internal",
            "updated_at": "2022-06-28T21:45:57.227-04:00",
            "updated_by": "service-account-astur_internal",
            "fields": {
                "bullet1": "My First Product",
                "color": "#ff0000",
                "depth": {
                    "unit": "cm",
                    "value": 25
                },
                "description": "some description",
                "height": {
                    "unit": "cm",
                    "value": 25
                },
                "int_a": 1,
                "int_b": 1,
                "length": {
                    "unit": "cm",
                    "value": 25
                },
                "package_depth": {
                    "unit": "cm",
                    "value": 25
                },
                "package_height": {
                    "unit": "cm",
                    "value": 25
                },
                "package_length": {
                    "unit": "cm",
                    "value": 25
                },
                "package_volume": {
                    "unit": "ml",
                    "value": 25
                },
                "package_weight": {
                    "unit": "lb",
                    "value": 2.5
                },
                "package_width": {
                    "unit": "cm",
                    "value": 25
                },
                "size": "large",
                "volume": {
                    "unit": "ml",
                    "value": 100
                },
                "weight": {
                    "unit": "lb",
                    "value": 2.5
                },
                "width": {
                    "unit": "cm",
                    "value": 25
                }
            },
            "group": "product",
            "options": [
                "height",
                "weight"
            ],
            "variant_options": [
                {
                    "name": "height",
                    "position": 1,
                    "values": [
                        25
                    ]
                },
                {
                    "name": "weight",
                    "position": 2,
                    "values": [
                        2.5,
                        150
                    ]
                }
            ],
            "sku": {
                "id": 1,
                "created_at": "2022-06-28T21:45:57.22-04:00",
                "created_by": "service-account-astur_internal",
                "updated_at": "2022-06-28T21:45:57.22-04:00",
                "updated_by": "service-account-astur_internal",
                "fields": {},
                "ean": null,
                "gtin": null,
                "inventory_id": 0,
                "isbn": null,
                "mpn": null,
                "pricing_item_id": 0,
                "sku_presentation": null,
                "upc": null,
                "sku": "fakesdfasdf"
            },
            "images": {
                "default": [
                    {
                        "id": 1,
                        "created_at": "2022-06-28T21:45:57.242-04:00",
                        "created_by": "service-account-astur_internal",
                        "updated_at": "2022-06-28T21:45:57.242-04:00",
                        "updated_by": "service-account-astur_internal",
                        "fields": {},
                        "image_id": "af6eb043a63a61001531f394bb38ecff24f23c08",
                        "position": 1,
                        "alt": null,
                        "height": 381,
                        "width": 381,
                        "url": "https://images.acenda.net/media/pr:default/YWJzOi8vc3RvcmVpbWFnZXMva2l0Y2hlbnNpbmsvYWY2ZWIwNDNhNjNhNjEwMDE1MzFmMzk0YmIzOGVjZmYyNGYyM2MwOC5qcGVn.jpeg",
                        "format": "jpeg",
                        "type": "main"
                    },
                    {
                        "id": 3,
                        "created_at": "2022-06-28T21:45:57.242-04:00",
                        "created_by": "service-account-astur_internal",
                        "updated_at": "2022-06-28T21:45:57.242-04:00",
                        "updated_by": "service-account-astur_internal",
                        "fields": {},
                        "image_id": "7db0839c85f9a199e27e0a05957f6883d2318a8e",
                        "position": 2,
                        "alt": null,
                        "height": 400,
                        "width": 400,
                        "url": "https://images.acenda.net/media/pr:default/YWJzOi8vc3RvcmVpbWFnZXMva2l0Y2hlbnNpbmsvN2RiMDgzOWM4NWY5YTE5OWUyN2UwYTA1OTU3ZjY4ODNkMjMxOGE4ZS5wbmc.png",
                        "format": "png",
                        "type": "alternate"
                    }
                ],
                "bucket2": [
                    {
                        "id": 2,
                        "created_at": "2022-06-28T21:45:57.242-04:00",
                        "created_by": "service-account-astur_internal",
                        "updated_at": "2022-06-28T21:45:57.242-04:00",
                        "updated_by": "service-account-astur_internal",
                        "fields": {},
                        "image_id": "7db0839c85f9a199e27e0a05957f6883d2318a8e",
                        "position": 1,
                        "alt": null,
                        "height": 400,
                        "width": 400,
                        "url": "https://images.acenda.net/media/pr:default/YWJzOi8vc3RvcmVpbWFnZXMva2l0Y2hlbnNpbmsvN2RiMDgzOWM4NWY5YTE5OWUyN2UwYTA1OTU3ZjY4ODNkMjMxOGE4ZS5wbmc.png",
                        "format": "png",
                        "type": "main"
                    }
                ]
            },
            "pricing_item": {
                "id": 1,
                "created_at": "2022-06-28T21:45:57.23-04:00",
                "created_by": "service-account-astur_internal",
                "updated_at": "2022-06-28T21:45:57.297-04:00",
                "updated_by": "service-account-astur_internal",
                "fields": {},
                "product_id": 1,
                "price": {
                    "amount": 100,
                    "currency": "USD",
                    "presentation": {
                        "amount": 120,
                        "currency": "CAD"
                    }
                },
                "msrp": {
                    "amount": 150,
                    "currency": "USD",
                    "presentation": {
                        "amount": 181,
                        "currency": "CAD"
                    }
                },
                "mapp": {
                    "amount": 100,
                    "currency": "USD",
                    "presentation": {
                        "amount": 120,
                        "currency": "CAD"
                    }
                }
            },
            "variants": [
                {
                    "id": 2,
                    "created_at": "2022-06-28T21:45:57.252-04:00",
                    "created_by": "service-account-astur_internal",
                    "updated_at": "2022-06-28T21:45:57.252-04:00",
                    "updated_by": "service-account-astur_internal",
                    "fields": {
                        "bullet1": "My First Variant",
                        "bullet2": "My First Variant",
                        "color": "#ff0000",
                        "depth": {
                            "unit": "cm",
                            "value": 25
                        },
                        "description": "some description",
                        "height": {
                            "unit": "cm",
                            "value": 25
                        },
                        "int_a": 1,
                        "int_b": 1,
                        "length": {
                            "unit": "cm",
                            "value": 25
                        },
                        "package_depth": {
                            "unit": "cm",
                            "value": 25
                        },
                        "package_height": {
                            "unit": "cm",
                            "value": 25
                        },
                        "package_length": {
                            "unit": "cm",
                            "value": 25
                        },
                        "package_volume": {
                            "unit": "ml",
                            "value": 25
                        },
                        "package_weight": {
                            "unit": "lb",
                            "value": 2.5
                        },
                        "package_width": {
                            "unit": "cm",
                            "value": 25
                        },
                        "size": "large",
                        "volume": {
                            "unit": "ml",
                            "value": 100
                        },
                        "weight": {
                            "unit": "lb",
                            "value": 2.5
                        },
                        "width": {
                            "unit": "cm",
                            "value": 25
                        }
                    },
                    "group": "variant",
                    "group_ids": [
                        1
                    ],
                    "sku": {
                        "id": 2,
                        "created_at": "2022-06-28T21:45:57.249-04:00",
                        "created_by": "service-account-astur_internal",
                        "updated_at": "2022-06-28T21:45:57.249-04:00",
                        "updated_by": "service-account-astur_internal",
                        "fields": {},
                        "ean": null,
                        "gtin": null,
                        "inventory_id": 0,
                        "isbn": null,
                        "mpn": null,
                        "pricing_item_id": 0,
                        "sku_presentation": null,
                        "upc": null,
                        "sku": "abcd1234"
                    },
                    "images": {
                        "default": null
                    }
                },
                {
                    "id": 3,
                    "created_at": "2022-06-28T21:45:57.252-04:00",
                    "created_by": "service-account-astur_internal",
                    "updated_at": "2022-06-28T21:45:57.252-04:00",
                    "updated_by": "service-account-astur_internal",
                    "fields": {
                        "bullet1": "My First Variant",
                        "bullet2": "My First Variant",
                        "color": "#ff0000",
                        "depth": {
                            "unit": "cm",
                            "value": 25
                        },
                        "description": "some description",
                        "int_a": 1,
                        "int_b": 1,
                        "length": {
                            "unit": "cm",
                            "value": 25
                        },
                        "package_depth": {
                            "unit": "cm",
                            "value": 25
                        },
                        "package_height": {
                            "unit": "cm",
                            "value": 25
                        },
                        "package_length": {
                            "unit": "cm",
                            "value": 25
                        },
                        "package_volume": {
                            "unit": "ml",
                            "value": 25
                        },
                        "package_weight": {
                            "unit": "lb",
                            "value": 2.5
                        },
                        "package_width": {
                            "unit": "cm",
                            "value": 25
                        },
                        "size": "large",
                        "weight": {
                            "unit": "lb",
                            "value": 150
                        },
                        "width": {
                            "unit": "cm",
                            "value": 25
                        }
                    },
                    "group": "variant",
                    "group_ids": [
                        1
                    ],
                    "sku": {
                        "id": 3,
                        "created_at": "2022-06-28T21:45:57.249-04:00",
                        "created_by": "service-account-astur_internal",
                        "updated_at": "2022-06-28T21:45:57.249-04:00",
                        "updated_by": "service-account-astur_internal",
                        "fields": {},
                        "ean": null,
                        "gtin": null,
                        "inventory_id": 0,
                        "isbn": null,
                        "mpn": null,
                        "pricing_item_id": 0,
                        "sku_presentation": null,
                        "upc": null,
                        "sku": "efgh5678"
                    },
                    "images": {
                        "default": null
                    }
                }
            ]
        }
    ]
}


export const getOneMockProduct = () => {
    return getAllMockProducts()[0]
}