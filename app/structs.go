package app

type Customer struct {
	Name    string `json:"first_name"`
	City    string `json:"city"`
	Zipcode string `json:"zip_code"`
}
