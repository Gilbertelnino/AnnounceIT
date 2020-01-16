import chai,{expect} from 'chai';
import chaihttp from 'chai-http';
import app from '../index'

chai.use(chaihttp);


describe('Anouncement test container',()=>{
    describe('POST /api/v1/announcement',()=>{
        it('should return 201 status if user create announcement successfully ',(done)=>{
            chai
            .request(app)
            .post('/api/v1/announcement')
            .send({text: 'hello world'})
            .end((err,res)=>{
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });

        });
        it('should return 403 status if user did not provide a token in the header ',(done)=>{
            chai
            .request(app)
            .post('/api/v1/announcement')
            .end((err,res)=>{
                expect(err).to.be.null;
                expect(res).to.have.status(403);
                done();
            });

        });
    }) 
    describe('PATCH /api/v1/announcement/:id',()=>{
        it('should return 200 status code if user update announcement successfully',(done)=>{
            chai
                .request(app)
                .patch('/api/v1/announcement/:id')
                .send({test: 'hello word'})
                .end((err,res)=>{
                    expect(err).to.be.null,
                    expect(res).to.have.status(200),
                    expect(res.body).to.have.property('message','announcement successfully updated')
                    done();
                })
        })
    });

})