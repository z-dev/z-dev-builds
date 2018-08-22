import { projects } from 'data/syncProjects'

export const emitProjects = socket => socket.emit('projects', { projects: projects() })
