import { projects } from 'server/data/syncProjects'

export const emitProjects = socket => socket.emit('projects', { projects: projects() })
