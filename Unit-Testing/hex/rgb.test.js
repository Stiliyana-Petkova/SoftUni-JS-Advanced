const {assert, expect} = require('chai');
const rgbToHexColor = require('./rgb');

describe('rgb to hex color', () => {
    it('is not a valid number', () => {
        assert.equal(rgbToHexColor(-1, -1, -1), undefined );
        assert.equal(rgbToHexColor(256, 256, 256), undefined);
        assert.equal(rgbToHexColor(256, -1, 256), undefined);
        assert.equal(rgbToHexColor(-1, 256, 256), undefined);
        assert.equal(rgbToHexColor(256, 256, -1), undefined);
        assert.equal(rgbToHexColor(256, -1, -1), undefined);
        assert.equal(rgbToHexColor(1, 1, -1), undefined);
        assert.equal(rgbToHexColor(1, -1, 1), undefined);
        assert.equal(rgbToHexColor(256, 1, 1), undefined);
        
    });
     it('wrong type', () => {
        assert.equal(rgbToHexColor(1, 'a', 'a'), undefined);
        assert.equal(rgbToHexColor('a', 'a', 'a'), undefined);
        assert.equal(rgbToHexColor('a', 1, 1), undefined);
        assert.equal(rgbToHexColor(1, 1, 'a'), undefined);
        assert.equal(rgbToHexColor(1, 'a', 1), undefined);
     });  

     it('invalid input', () => {
         assert.equal(rgbToHexColor(1,1), undefined);
     })

     it('not an integer number', () => {
         assert.equal(rgbToHexColor(1.1, 1, 1), undefined);
         assert.equal(rgbToHexColor(1, 1, 1.1), undefined);
         assert.equal(rgbToHexColor(1, 1.1, 1), undefined);
         assert.equal(rgbToHexColor(1.1, 1.1, 1.1), undefined);


     }) 
         
     
        
     it('is valid number', () => {
         assert.equal(rgbToHexColor(1, 1, 1), '#010101');
         assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA');
         assert.equal(rgbToHexColor(255, 0, 0), '#FF0000');
     });   
        

    
})