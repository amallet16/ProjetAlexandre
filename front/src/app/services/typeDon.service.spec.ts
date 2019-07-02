import { TestBed } from "@angular/core/testing";
import { ProjectService } from "./project.service";
import { TypeDonService } from "./typeDon.service";

describe('typeDonService', ()=>{
    beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeDonService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
})