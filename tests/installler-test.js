var Installer = require('../lib/installer');

describe('Installer', function () {
    describe('Installation Test', function () {
        this.timeout(30000);
        it('should install node modules inside a directory', function (done) {
            var directory = __dirname + '/files/installer-test/build/';
            Installer.install(directory, function () {
                done();
            })
        });
    });
});
