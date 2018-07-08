var assert = require('chai');
var testBlog = require('../models/blogModel');

describe('testBlogModel', function () {
    var blog = new testBlog();
    it("should be invalid if title is not included", function () {
        blog.validate(function (err) {
            assert.expect(err.errors.title).to.exist;
        });
    });
    it("should be invalid if description is not included", function () {
        blog.validate(function (err) {
            assert.expect(err.errors.description).to.exist;
        });
    });
    it("should be invalid if author is not included", function () {
        blog.validate(function (err) {
            assert.expect(err.errors.author).to.exist;
        });

    });
    it("expect blog to be an instance of testBlog Model", function () {
        blog.validate(function () {
            assert.expect(blog).to.be.an.instanceOf(testBlog);
        });
    });
});




    // image_file_name:{type: String, required: false},
    // create_dt:{type: Date, required: false},
    // published:{type: Number, required: false},
    // publish_dt:{type: Date, required: false},
    // update_dt:{type: Date, required: false}