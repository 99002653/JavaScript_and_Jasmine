describe('To test class customer', () => {
    let cust = null;
    it('should check if name is of valid format', () => {
    const cust = newcustomer("Sirisha", "siri@gmail.com" , "10-12-2020","1234567890","400");
    expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");        
        });
     
    it('should check whether the name has min 5 characters', () => {
    const cust = newcustomer("Sirisha", "siri@gmail.com" , "10-12-2020","1234567890","400");
    expect(cust.name.length).toBe(5);
        });
    it('should check if email is of valid format', () => {
    const cust = newcustomer("Sirisha", "siri@gmail.com" , "10-12-2020","1234567890","400");
    expect(cust.email).toMatch("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"); 
        }); 
    it('should check if bill date is not more than one month old', () => {
    const cust = newcustomer("Sirisha", "siri@gmail.com" , "19-10-2020","8281268966","400");
    let date = cust.billDate;
    let x = getDate(date);        
        });
    });