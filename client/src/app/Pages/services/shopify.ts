export const shopifyOptions = (id: string) => {
    return {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0",
              "margin-bottom": "50px"
            },
            "text-align": "center"
          },
          "title": {
            "font-size": "22px"
          },
          "button": {
            "font-family": "Roboto, sans-serif",
            ":hover": {
              "background-color": "#1d54b9"
            },
            "background-color": "#205dce",
            ":focus": {
              "background-color": "#1d54b9"
            }
          },
          "price": {
            "font-size": "18px"
          },
          "compareAt": {
            "font-size": "15.299999999999999px"
          },
          "unitPrice": {
            "font-size": "15.299999999999999px"
          }
        },
        "layout": "horizontal",
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "description": true
        },
        "width": "100%",
        "text": {
          "button": "Add to cart"
        },
        "googleFonts": [
          "Roboto"
        ]
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-family": "Roboto, sans-serif",
            ":hover": {
              "background-color": "#1d54b9"
            },
            "background-color": "#205dce",
            ":focus": {
              "background-color": "#1d54b9"
            }
          },
          "title": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "bold",
            "font-size": "26px",
            "color": "#4c4c4c",
          },
          "price": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "18px",
            "color": "#4c4c4c"
          },
          "compareAt": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          },
          "unitPrice": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          }
        },
        "googleFonts": [
          "Roboto"
        ],
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            "font-family": "Roboto, sans-serif",
            ":hover": {
              "background-color": "#1d54b9"
            },
            "background-color": "#205dce",
            ":focus": {
              "background-color": "#1d54b9"
            }
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        },
        "googleFonts": [
          "Roboto"
        ]
      },
      "toggle": {
        "styles": {
          "toggle": {
            "font-family": "Roboto, sans-serif",
            "background-color": "#205dce",
            ":hover": {
              "background-color": "#1d54b9"
            },
            ":focus": {
              "background-color": "#1d54b9"
            }
          }
        }
      }
    }
}
