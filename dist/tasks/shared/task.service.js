"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let TaskService = class TaskService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        const tasks = await this.prisma.task.findMany();
        return tasks;
    }
    async getById(id) {
        const task = await this.prisma.task.findUnique({
            where: { id },
        });
        if (!task) {
            console.log('entrei aqui');
            throw Error(`Task ID ${id} not found ! `);
        }
        return task;
    }
    async create(data) {
        const task = await this.prisma.task.create({ data });
        return task;
    }
    async update(id, data) {
        const task = await this.prisma.task.findUnique({
            where: { id },
        });
        if (!task) {
            throw Error(`Task ID ${id} not found ! `);
        }
        const tasku = await this.prisma.task.update({
            where: { id: id },
            data,
        });
        return tasku;
    }
    async remove(id) {
        const task = await this.prisma.task.findUnique({
            where: { id },
        });
        if (!task) {
            throw Error(`Task ID ${id} not found ! `);
        }
        const taskr = await this.prisma.task.delete({
            where: { id },
        });
        return taskr;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map